import express from "express";
import {
  createPaper,
  getAllPapers,
  getSinglePaper,
  updatePaper,
  deletePaper,
  getPapersBySubject,
  getPapersByExamBody,
} from "../controller/paper.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Papers
 *   description: Past question papers management APIs
 */

/**
 * @swagger
 * /api/papers:
 *   post:
 *     summary: Create a paper
 *     tags: [Papers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - year
 *               - title
 *               - subjectId
 *               - examBodyId
 *               - file
 *             properties:
 *               year:
 *                 type: number
 *                 example: 2025
 *               title:
 *                 type: string
 *                 example: JAMB Use of English 2025
 *               subjectId:
 *                 type: string
 *                 example: 65fd912ab21e9b1c
 *               examBodyId:
 *                 type: string
 *                 example: 65fd800aa21e9b1c
 *               file:
 *                 type: object
 *                 properties:
 *                   url:
 *                     type: string
 *                     example: https://storage.example.com/past-questions/jamb-english-2025.pdf
 *               isLatest:
 *                 type: boolean
 *                 example: true
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Paper created successfully
 */
router.post("/", createPaper);

/**
 * @swagger
 * /api/papers/get-all:
 *   get:
 *     summary: Get all papers with populated subject and exam body details
 *     tags: [Papers]
 *     responses:
 *       200:
 *         description: List of papers with subject and exam body information
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
 *                   example: Papers fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       year:
 *                         type: number
 *                       title:
 *                         type: string
 *                       subjectId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           slug:
 *                             type: string
 *                       examBodyId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           fullName:
 *                             type: string
 *                           slug:
 *                             type: string
 *                       file:
 *                         type: object
 *                         properties:
 *                           url:
 *                             type: string
 *                       downloadCount:
 *                         type: number
 *                       viewCount:
 *                         type: number
 *                       isLatest:
 *                         type: boolean
 *                       isActive:
 *                         type: boolean
 */
router.get("/get-all", getAllPapers);

/**
 * @swagger
 * /api/papers/get-single/{id}:
 *   get:
 *     summary: Get single paper by ID with populated subject and exam body details
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paper ID
 *     responses:
 *       200:
 *         description: Paper fetched successfully with subject and exam body information
 *       404:
 *         description: Paper not found
 */
router.get("/get-single/:id", getSinglePaper);

/**
 * @swagger
 * /api/papers/get-by-subject/{subjectId}:
 *   get:
 *     summary: Get papers by subject ID
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject ID
 *     responses:
 *       200:
 *         description: Papers fetched successfully
 */
router.get("/get-by-subject/:subjectId", getPapersBySubject);

/**
 * @swagger
 * /api/papers/get-by-exambody/{examBodyId}:
 *   get:
 *     summary: Get papers by exam body ID
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: examBodyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Exam Body ID
 *     responses:
 *       200:
 *         description: Papers fetched successfully
 */
router.get("/get-by-exambody/:examBodyId", getPapersByExamBody);

/**
 * @swagger
 * /api/papers/update/{id}:
 *   put:
 *     summary: Update a paper
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paper ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               year:
 *                 type: number
 *               title:
 *                 type: string
 *               subjectId:
 *                 type: string
 *               examBodyId:
 *                 type: string
 *               file:
 *                 type: object
 *                 properties:
 *                   url:
 *                     type: string
 *               isLatest:
 *                 type: boolean
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Paper updated successfully
 */
router.put("/update/:id", updatePaper);

/**
 * @swagger
 * /api/papers/delete/{id}:
 *   delete:
 *     summary: Delete a paper
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paper ID
 *     responses:
 *       200:
 *         description: Paper deleted successfully
 */
router.delete("/delete/:id", deletePaper);

export default router;