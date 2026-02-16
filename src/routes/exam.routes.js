import express from "express";
import {
  createExam,
  getAllExams,
  getSingleExam,
  updateExam,
  deleteExam,
} from "../controller/Exam.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Exams
 *   description: Exam management APIs
 */

/**
 * @swagger
 * /api/exams:
 *   post:
 *     summary: Create a new exam
 *     tags: [Exams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               examId: exam_waec_001
 *               name: WAEC
 *               fullName: West African Examinations Council
 *               slug: waec
 *               description: SSCE past questions
 *               targetClasses: SSS3
 *               subjectsCount: 10
 *               papersCount: 30
 *               yearsAvailable: "3+"
 *               fileFormat: PDF
 *               color: red
 *               badges: ["SSS1","SSS2","SSS3"]
 *               isActive: true
 *     responses:
 *       200:
 *         description: Exam created successfully
 */
router.post("/", createExam);

/**
 * @swagger
 * /api/exams/get-allExams:
 *   get:
 *     summary: Get all exams
 *     tags: [Exams]
 *     responses:
 *       200:
 *         description: List of exams
 */
router.get("/get-allExams", getAllExams);

/**
 * @swagger
 * /api/exams/get-single/{id}:
 *   get:
 *     summary: Get single exam
 *     tags: [Exams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exam fetched successfully
 */
router.get("/get-single/:id", getSingleExam);

/**
 * @swagger
 * /api/exams/update/{id}:
 *   patch:
 *     summary: Update an exam
 *     tags: [Exams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exam updated successfully
 */
router.patch("/update/:id", updateExam);

/**
 * @swagger
 * /api/exams/delete/{id}:  
 *   delete:
 *     summary: Delete an exam
 *     tags: [Exams]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exam deleted successfully
 */
router.delete("/delete/:id", deleteExam);

export default router;
