# Campus Connect Database Design

## Database Name

CampusConnectDB

---

# Collections

## 1. Users Collection

Stores authentication information.

Fields:

- _id
- name
- email
- password
- role
- createdAt

Roles:
- Student
- Faculty
- Admin

---

## 2. Students Collection

Stores student information.

Fields:

- _id
- userId
- studentId
- department
- semester
- enrolledCourses

Relationship:

User → Student (One-to-One)

---

## 3. Faculty Collection

Stores faculty information.

Fields:

- _id
- userId
- facultyId
- department
- specialization

Relationship:

User → Faculty (One-to-One)

---

## 4. Courses Collection

Stores course information.

Fields:

- _id
- courseName
- courseCode
- description
- facultyId
- students

Relationships:

Faculty → Courses (One-to-Many)

Students → Courses (Many-to-Many)

---

## 5. Assignments Collection

Stores assignment information.

Fields:

- _id
- title
- description
- courseId
- facultyId
- deadline
- submissions

Relationships:

Course → Assignments (One-to-Many)

---

## 6. Announcements Collection

Stores announcements.

Fields:

- _id
- title
- message
- createdBy
- date

Relationship:

Faculty → Announcements (One-to-Many)

---

# Database Relationship Summary

User
 |
 |--- Student

User
 |
 |--- Faculty

Faculty
 |
 |--- Courses
          |
          |--- Assignments

Faculty
 |
 |--- Announcements