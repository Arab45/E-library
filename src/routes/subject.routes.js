import express from "express";
import {
  createSubject,
  getAllSubjects,
  getSingleSubject,
  updateSubject,
  deleteSubject,
} from "../controller/subject.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: Subject management APIs
 */

/**
 * @swagger
 * /api/subjects:
 *   post:
 *     summary: Create a subject
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Use of English
 *             examBodyId: 65fd800aa21e9b1c
 *             examBody:
 *               name: JAMB
 *               slug: jamb
 *               fullName: Joint Admissions and Matriculation Board
 *             papersCount: 3
 *             yearsAvailable: 2023 - 2025 papers available
 *             isComingSoon: false
 *             isActive: true
 *     responses:
 *       200:
 *         description: Subject created successfully
 */
router.post("/", createSubject);

/**
 * @swagger
 * /api/subjects/get-all:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of subjects
 */
router.get("/get-all", getAllSubjects);

/**
 * @swagger
 * /api/subjects/get-single/{id}:
 *   get:
 *     summary: Get single subject
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject fetched successfully
 */
router.get("/get-single/:id", getSingleSubject);

/**
 * @swagger
 * /api/subjects/update/{id}:
 *   patch:
 *     summary: Update a subject
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject updated successfully
 */
router.put("/update/:id", updateSubject);

/**
 * @swagger
 * /api/subjects/delete/{id}:
 *   delete:
 *     summary: Delete a subject
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject deleted successfully
 */
router.delete("/delete/:id", deleteSubject);

export default router;
