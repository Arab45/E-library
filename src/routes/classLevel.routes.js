import express from "express";
import {
  createClassLevel,
  deleteClassLevel,
  getAllClassLevels,
  getSingleClassLevel,
  getClassLevelBySlug,
  updateClassLevel,
} from "../controller/classLevel.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Class Levels
 *   description: Class level management APIs
 */

/**
 * @swagger
 * /api/class-levels:
 *   post:
 *     summary: Create a new class level
 *     tags: [Class Levels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *               - level
 *               - year
 *             properties:
 *               code:
 *                 type: string
 *                 example: JSS1
 *               name:
 *                 type: string
 *                 example: Junior Secondary School 1
 *               level:
 *                 type: string
 *                 enum: [junior, senior]
 *                 example: junior
 *               year:
 *                 type: number
 *                 example: 1
 *               subjectsCount:
 *                 type: number
 *                 example: 8
 *               materialsCount:
 *                 type: number
 *                 example: 50
 *               color:
 *                 type: string
 *                 example: red
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Class level created successfully
 */
router.post("/", createClassLevel);

/**
 * @swagger
 * /api/class-levels/get-allClassLevels:
 *   get:
 *     summary: Get all class levels
 *     tags: [Class Levels]
 *     responses:
 *       200:
 *         description: List of class levels
 */
router.get("/get-allClassLevels", getAllClassLevels);

/**
 * @swagger
 * /api/class-levels/get-single/{id}:
 *   get:
 *     summary: Get single class level by ID
 *     tags: [Class Levels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class level ID
 *     responses:
 *       200:
 *         description: Class level fetched successfully
 *       404:
 *         description: Class level not found
 */
router.get("/get-single/:id", getSingleClassLevel);

/**
 * @swagger
 * /api/class-levels/get-by-slug:
 *   get:
 *     summary: Get class level by slug
 *     tags: [Class Levels]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Class level slug
 *         example: jss1
 *     responses:
 *       200:
 *         description: Class level fetched successfully
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
 *                   example: Class level fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     code:
 *                       type: string
 *                     name:
 *                       type: string
 *                     slug:
 *                       type: string
 *                     level:
 *                       type: string
 *                     year:
 *                       type: number
 *                     subjectsCount:
 *                       type: number
 *                     materialsCount:
 *                       type: number
 *                     color:
 *                       type: string
 *                     isActive:
 *                       type: boolean
 *       400:
 *         description: Slug query is required
 *       404:
 *         description: Class level not found
 */
router.get("/get-by-slug", getClassLevelBySlug);

/**
 * @swagger
 * /api/class-levels/update/{id}:
 *   put:
 *     summary: Update a class level
 *     tags: [Class Levels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class level ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *               level:
 *                 type: string
 *                 enum: [junior, senior]
 *               year:
 *                 type: number
 *               subjectsCount:
 *                 type: number
 *               materialsCount:
 *                 type: number
 *               color:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Class level updated successfully
 *       404:
 *         description: Class level not found
 */
router.put("/update/:id", updateClassLevel);

/**
 * @swagger
 * /api/class-levels/delete/{id}:
 *   delete:
 *     summary: Delete a class level
 *     tags: [Class Levels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Class level ID
 *     responses:
 *       200:
 *         description: Class level deleted successfully
 *       404:
 *         description: Class level not found
 */
router.delete("/delete/:id", deleteClassLevel);

export default router;