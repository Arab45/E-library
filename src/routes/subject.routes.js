import express from "express";
import {
  createSubject,
  getAllSubjects,
  getSingleSubject,
  updateSubject,
  deleteSubject,
  getSubjectBySlug,
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
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - examBodyId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Use of English
 *               examBodyId:
 *                 type: string
 *                 example: 65fd800aa21e9b1c
 *               papersCount:
 *                 type: number
 *                 example: 3
 *               yearsAvailable:
 *                 type: string
 *                 example: 2023 - 2025 papers available
 *               isComingSoon:
 *                 type: boolean
 *                 example: false
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Subject created successfully
 */
router.post("/", createSubject);

/**
 * @swagger
 * /api/subjects/get-all:
 *   get:
 *     summary: Get all subjects with populated exam body details
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of subjects with exam body information
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
 *                   example: Subjects fetched successfully
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
 *                       papersCount:
 *                         type: number
 *                       yearsAvailable:
 *                         type: string
 *                       isComingSoon:
 *                         type: boolean
 *                       isActive:
 *                         type: boolean
 */
router.get("/get-all", getAllSubjects);

/**
 * @swagger
 * /api/subjects/get-single/{id}:
 *   get:
 *     summary: Get single subject by ID with populated exam body details
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject ID
 *     responses:
 *       200:
 *         description: Subject fetched successfully with exam body information
 *       404:
 *         description: Subject not found
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
 *         description: Subject ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Use of English
 *               examBodyId:
 *                 type: string
 *               papersCount:
 *                 type: number
 *               yearsAvailable:
 *                 type: string
 *               isComingSoon:
 *                 type: boolean
 *               isActive:
 *                 type: boolean
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
 *         description: Subject ID
 *     responses:
 *       200:
 *         description: Subject deleted successfully
 */
router.delete("/delete/:id", deleteSubject);

/**
 * @swagger
 * /api/subjects/get-by-slug:
 *   get:
 *     summary: Get subject by slug with populated exam body details
 *     tags: [Subjects]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject slug
 *         example: use-of-english
 *     responses:
 *       200:
 *         description: Subject fetched successfully with exam body information
 */
router.get("/get-by-slug", getSubjectBySlug);

export default router;