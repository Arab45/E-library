import express from "express";
import * as controller from "../controllers/academicSubject.controller.js";
import {
  createAcademicSubject,
  deleteAcademicSubject,
  getAllAcademicSubjects,
  getSingleAcademicSubject,
  updateAcademicSubject,
} from "../controller/academicSubject.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: AcademicSubject
 *   description: Academic subjects
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AcademicSubject:
 *       type: object
 *       required:
 *         - name
 *         - classLevelId
 *       properties:
 *         name:
 *           type: string
 *           example: Mathematics
 *         description:
 *           type: string
 *         classLevelId:
 *           type: string
 *           example: 65f2ab123456789
 */

/**
 * @swagger
 * /api/academic-subjects:
 *   post:
 *     summary: Create academic subject
 *     tags: [AcademicSubject]
 */
router.post("/", createAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/getAll:
 *   get:
 *     summary: Get all academic subjects
 *     tags: [AcademicSubject]
 *  *     responses:
 *       200:
 *         description: fetch all academic subjects successfully
 */
router.get("/getAll", getAllAcademicSubjects);

/**
 * @swagger
 * /api/academic-subjects/getSingle/{id}:
 *   get:
 *     summary: Get single academic subject
 *     tags: [AcademicSubject]
 parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Academy subject fetched successfully
 */
router.get("/getSingle/:id", getSingleAcademicSubject);

/**
 * @swagger
 * /api/academic-subjects/update/{id}:
 *   put:
 *     summary: Update academic subject
 *     tags: [AcademicSubject]
 * *     parameters:
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
 *     summary: Delete academic subject
 *     tags: [AcademicSubject]
 * *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Academy subject deleted successfully
 */
router.delete("/delete/:id", deleteAcademicSubject);

export default router;
