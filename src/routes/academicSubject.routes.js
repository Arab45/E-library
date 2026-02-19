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
 *             required:
 *               - name
 *               - classLevelId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mathematics
 *               description:
 *                 type: string
 *                 example: Core mathematics subject
 *               classLevelId:
 *                 type: string
 *                 example: 65f1a2b3c4d5e6f789012345
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Academic subject created successfully
 */
router.post("/", createAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/get-allSubjects:
 *   get:
 *     summary: Get all academic subjects with populated class level details
 *     tags: [Academic Subjects]
 *     responses:
 *       200:
 *         description: List of academic subjects with class level information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Subjects fetched
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       slug:
 *                         type: string
 *                       description:
 *                         type: string
 *                       classLevelId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           code:
 *                             type: string
 *                           slug:
 *                             type: string
 *                       materialsCount:
 *                         type: number
 *                       isActive:
 *                         type: boolean
 */
router.get("/get-allSubjects", getAllAcademicSubjects);

/**
 * @swagger
 * /api/academic-subjects/get-single/{id}:
 *   get:
 *     summary: Get single academic subject by ID with populated class level details
 *     tags: [Academic Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Academic subject ID
 *     responses:
 *       200:
 *         description: Academic subject fetched successfully with class level information
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
 *         description: Academic subject ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Advanced Mathematics
 *               description:
 *                 type: string
 *               classLevelId:
 *                 type: string
 *               isActive:
 *                 type: boolean
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
 *         description: Academic subject ID
 *     responses:
 *       200:
 *         description: Academic subject deleted successfully
 */
router.delete("/delete/:id", deleteAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/get-bySlug:
 *   get:
 *     summary: Get single academic subject by slug with populated class level details
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
 *         description: Academic subject fetched successfully with class level information
 */
router.get("/get-bySlug", getSingleAcademicSubjectBySlug);

export default router;