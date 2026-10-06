# Campus Connect — Module Diagram

## System Modules

Campus Connect is divided into the following logical modules:

### 1. Authentication Module
- User registration
- User login
- User logout
- User authentication
- Role-based access

### 2. User Management Module
- Manage user profiles
- View user information
- Update profile information
- Manage user roles

### 3. Student Module
- Student dashboard
- View courses
- View assignments
- Access academic resources
- View announcements

### 4. Faculty Module
- Faculty dashboard
- Manage courses
- Create and manage assignments
- Publish announcements
- Manage academic resources

### 5. Course Management Module
- Create courses
- View courses
- Update courses
- Delete courses
- Assign faculty to courses

### 6. Assignment Management Module
- Create assignments
- View assignments
- Update assignments
- Delete assignments
- Allow students to access assignments

### 7. Announcement Module
- Create announcements
- View announcements
- Update announcements
- Delete announcements

### 8. Academic Resource Module
- Add academic resources
- View resources
- Update resources
- Delete resources
- Search resources

### 9. Administration Module
- Manage users
- Manage courses
- Manage announcements
- Manage academic resources
- Monitor the system

## Module Relationship

```text
                    Campus Connect
                          |
        +-----------------+-----------------+
        |                 |                 |
 Authentication     User Management    Administration
        |
   +----+----+
   |         |
Student    Faculty
   |         |
   +----+----+
        |
   +----+-----------------------------+
   |          |          |            |
 Courses   Assignments  Announcements Resources
