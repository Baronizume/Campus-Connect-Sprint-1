# Campus Connect — Entity Relationship Diagram

## Main Entities

The Campus Connect system uses the following main entities:

- User
- Course
- Assignment
- Announcement
- Resource

## Entity Relationships

```text
User
 │
 ├──────────< Course
 │              │
 │              └──────────< Assignment
 │
 ├──────────< Assignment
 │
 ├──────────< Announcement
 │
 └──────────< Resource
