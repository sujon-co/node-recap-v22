# University Management System (UMS)

I am building a university management system. where have three types of users:

1. Student
2. Faculty
3. Admin

## Functional Requirements

- Student:
    1. Student can login and logout.
    2. Student can manage their profile.
    3. Student can update certain information.
    4. Student can enroll in a semester course.
    5. Student can enroll in offered courses for a specific semester.
    6. Student can pay tuition fees thought offline and online. (Partial/Full) Payment
    7. Student can see their transaction history.
    8. Student can see this semester's course list and routine
    9. Student can see their result (Full/Semester wise).
    10. Student can see their attendance.
    11. Student can evaluate the teacher.

- Faculty:
    1. Faculty can login and logout.
    2. Faculty can manage their profile.
    3. Faculty can update certain information.
    4. Faculty can see their assigned courses.
    5. Faculty can see their assigned semester.
    6. Faculty can see their routine.
    7. Faculty can see their student list.
    8. Faculty can see their student's result.
    9. Faculty can see their student's attendance.
    10. Faculty can see their student's payment status.
    11. Faculty can see their student's permission status.
    12. Faculty can see their student's feedback.

- Admin:
    1. Admin can login and logout on the system.
    2. Admin can manage and update their profile.
    3. Admin can manage student and teacher information.
        - Update/Remove/Add
        - Change Password
        - Change Role
        - Forcefully Logout
    4. Admin can manage course information.
        - Add/Remove/Update
        - Assign Teacher
        - Assign Semester
    5. Admin can manage semester information.
    6. Admin can manage routine information.
    7. Admin can manage result information.
    8. Admin can manage attendance information.
    9. Admin can manage payment information.
    10. Admin can manage permission information.

## Authentication System (Schema)

- Permission
  - id
  - title

- User Permission
  - permission id (Foreign Key)
  - user id (Foreign Key)

- User:
  - user id
  - role
  - email
  - password
  - student id | faculty id | admin id
  - created at
  - updated at

- Student:
  - student id
    - first name
    - middle name
    - last name
  - email
  - contact no
  - emergency contact no
  - present address
  - permanent address
  - department
  - date of birth
  - gender
  - subject

- Faculty:
  - faculty id
  - name
    - first name
    - middle name
    - last name
  - email
  - contact no
  - emergency contact no
  - present address
  - permanent address
  - department
  - date of birth

- Admin:
  - admin id
  - name
    - first name
    - middle name
    - last name
  - email
  - contact no
  - department
  - designation
