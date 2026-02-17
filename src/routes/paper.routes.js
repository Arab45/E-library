import express from "express";
import {
  createPaper,
  getAllPapers,
  getSinglePaper,
  updatePaper,
  deletePaper,
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
 *           example:
 *             year: 2025
 *             title: JAMB Use of English 2025
 *             subjectId: 65fd912ab21e9b1c
 *             examBodyId: 65fd800aa21e9b1c
 *             file:
 *               url: https://storage.example.com/past-questions/jamb-english-2025.pdf
 *             isLatest: true
 *             isActive: true
 *     responses:
 *       200:
 *         description: Paper created successfully
 */
router.post("/", createPaper);

/**
 * @swagger
 * /api/papers/get-all:
 *   get:
 *     summary: Get all papers
 *     tags: [Papers]
 *     responses:
 *       200:
 *         description: List of papers
 */
router.get("/get-all", getAllPapers);

/**
 * @swagger
 * /api/papers/get-single/{id}:
 *   get:
 *     summary: Get single paper
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paper fetched successfully
 */
router.get("/get-single/:id", getSinglePaper);

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
 *     responses:
 *       200:
 *         description: Paper deleted successfully
 */
router.delete("/delete/:id", deletePaper);

export default router;
