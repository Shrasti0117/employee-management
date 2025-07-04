
const employees = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Description 1",
        "date": "2025-03-17",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Description 2",
        "date": "2025-03-18",
        "category": "Testing",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Description 3",
        "date": "2025-03-19",
        "category": "Deployment",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task A",
        "description": "Description A",
        "date": "2025-03-17",
        "category": "Bug Fixing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task B",
        "description": "Description B",
        "date": "2025-03-18",
        "category": "Code Review",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Rohan Iyer",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Feature Development",
        "description": "Implement new feature",
        "date": "2025-03-17",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Migration",
        "description": "Migrate database to new server",
        "date": "2025-03-19",
        "category": "Database",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Neha Patil",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task X",
        "description": "Documentation Update",
        "date": "2025-03-17",
        "category": "Documentation",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task Y",
        "description": "Security Audit",
        "date": "2025-03-18",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task Z",
        "description": "API Optimization",
        "date": "2025-03-19",
        "category": "Backend",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "name": "Arjun Rao",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task M",
        "description": "UI Design Update",
        "date": "2025-03-17",
        "category": "UI/UX",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task N",
        "description": "Performance Testing",
        "date": "2025-03-18",
        "category": "Testing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task O",
        "description": "Server Maintenance",
        "date": "2025-03-19",
        "category": "Infrastructure",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  }
];


  const admin = [{
    "id": 1, "email": "admin@example.com", "password": "123"
  }];


  export const setLocalStorage = ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getlocalStorage=()=>{
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))

      return{employees,admin}
  }