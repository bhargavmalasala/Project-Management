import prisma from "../configs/prisma.js";
import { inngest } from "../inngest/index.js";

// create task
export const createTask = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const {
      title,
      description,
      projectId,
      type,
      status,
      priority,
      assigneeId,
      due_date,
    } = req.body;

    const origin = req.get("origin");

    // check if user has admin role for project
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { workspace: { include: { members: true } } },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } else if (project.team_lead !== userId) {
      return res
        .status(403)
        .json({ message: "You do not have admin rights for this project" });
    } else if (
      assigneeId &&
      !project.workspace.members.some((member) => member.userId === assigneeId)
    ) {
      return res
        .status(400)
        .json({
          message: "Assignee must be a member of the project's workspace",
        });
    }

    const task = await prisma.task.create({
      data: {
        projectId,
        title,
        description,
        priority,
        assigneeId,
        status,
        type,
        due_date: new Date(due_date),
      },
    });

    const taskwithAssignee = await prisma.task.findUnique({
      where: { id: task.id },
      include: { assignee: true },
    });
    await inngest.send({
      name: "app/task.assigned",
      data: {
        taskId: task.id,
        origin,
      },
    });
    res.json({ task: taskwithAssignee, message: "Task created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error.code });
  }
};

// update task
export const updateTask = async (req, res) => {
  try {
    const task = await prisma.task.findUnique({ where: { id: req.params.id } });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const { userId } = await req.auth();

    // check if user has admin role for project
    const project = await prisma.project.findUnique({
      where: { id: task.projectId },
      include: { workspace: { include: { members: true } } },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } else if (project.team_lead !== userId) {
      return res
        .status(403)
        .json({ message: "You do not have admin rights for this project" });
    }

    const updatedTask = await prisma.task.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.json({ task: updatedTask, message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error.code });
  }
};

// delete task
export const deleteTask = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { tasksIds } = req.body;
    const tasks = await prisma.task.findMany({
      where: {
        id: { in: tasksIds },
      },
    });

    if (tasks.length === 0) {
      return res.status(404).json({ message: "Tasks not found" });
    }

    // check if user has admin role for project
    const project = await prisma.project.findUnique({
      where: { id: tasks[0].projectId },
      include: { workspace: { include: { members: true } } },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } else if (project.team_lead !== userId) {
      return res
        .status(403)
        .json({ message: "You do not have admin rights for this project" });
    }

    await prisma.task.deleteMany({
      where: { id: { in: tasksIds } },
    });

    res.json({ message: "Tasks deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error.code });
  }
};
