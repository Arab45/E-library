import express from "express";
import {
  createAcademicSubject,
  deleteAcademicSubject,
  getAllAcademicSubjects,
  getSingleAcademicSubject,
  getSingleAcademicSubjectBySlug,
  updateAcademicSubject,
} from "../controller/academicSubject.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Academic Subjects
 *   description: Academic subject management APIs
 */

/**
 * @swagger
 * /api/academic-subjects:
 *   post:
 *     summary: Create a new academic subject
 *     tags: [Academic Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: Mathematics
 *               code: MTH101
 *               description: Core mathematics subject
 *               classLevelId: 65f1a2b3c4d5e6f789012345
 *               isActive: true
 *     responses:
 *       200:
 *         description: Academic subject created successfully
 */
router.post("/", createAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/get-allSubjects:
 *   get:
 *     summary: Get all academic subjects
 *     tags: [Academic Subjects]
 *     responses:
 *       200:
 *         description: List of academic subjects
 */
router.get("/get-allSubjects", getAllAcademicSubjects);

/**
 * @swagger
 * /api/academic-subjects/get-single/{id}:
 *   get:
 *     summary: Get single academic subject
 *     tags: [Academic Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Academic subject fetched successfully
 *       404:
 *         description: Subject not found
 */
router.get("/get-single/:id", getSingleAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/update/{id}:
 *   put:
 *     summary: Update an academic subject
 *     tags: [Academic Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Academic subject updated successfully
 */
router.put("/update/:id", updateAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/delete/{id}:
 *   delete:
 *     summary: Delete an academic subject
 *     tags: [Academic Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Academic subject deleted successfully
 */
router.delete("/delete/:id", deleteAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/get-single:
 *   get:
 *     summary: Get single academic subject by slug
 *     tags: [Academic Subjects]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Academic subject slug
 *         example: mathematics
 *     responses:
 *       200:
 *         description: Academic subject fetched successfully
 */
router.get("/get-bySlug", getSingleAcademicSubjectBySlug);


export default router;
