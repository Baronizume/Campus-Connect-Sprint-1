# Campus Connect — MongoDB Collection Design

## 1. Users Collection

Stores information about students, faculty, and administrators.

### Fields

- `_id`
- `name`
- `email`
- `password`
- `role`
- `profile`
- `createdAt`
- `updatedAt`

### Role Values

- Student
- Faculty
- Administrator

---

## 2. Courses Collection

Stores information about academic courses.

### Fields

- `_id`
- `courseName`
- `courseCode`
- `description`
- `facultyId`
- `createdAt`
- `updatedAt`

---

## 3. Assignments Collection

Stores assignments associated with courses.

### Fields

- `_id`
- `title`
- `description`
- `courseId`
- `facultyId`
- `dueDate`
- `createdAt`
- `updatedAt`

---

## 4. Announcements Collection

Stores campus and academic announcements.

### Fields

- `_id`
- `title`
- `content`
- `createdBy`
- `createdAt`
- `updatedAt`

---

## 5. Resources Collection

Stores academic resources.

### Fields

- `_id`
- `title`
- `description`
- `resourceUrl`
- `courseId`
- `uploadedBy`
- `createdAt`
- `updatedAt`

---

## Collection Relationships

```text
Users
  │
  ├──< Courses
  │      │
  │      └──< Assignments
  │
  ├──< Assignments
  │
  ├──< Announcements
  │
  └──< Resources
           │
           └── Course
