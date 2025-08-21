# Users Management System

This is the Users management system for the SystemAdmin section, designed to manage actual users in the system.

## Features

### Main Table (UsersTable.jsx)
- Displays users with Arabic/English names, email, type, privileges, etc.
- Checkbox selection for individual and bulk operations
- Search functionality across all fields
- Sortable columns
- Pagination support
- Export options (CSV, Excel, PDF)
- Send email functionality for selected users
- Actions: Edit and Delete for each user

### Create User Modal (CreateUser.jsx)
- Comprehensive form to create new users
- Fields include:
  - First/Last Name (Arabic & English)
  - Gender, Birth Date
  - Country/State of Residence
  - Education Level, Type, Privileges
  - Direct Manager, Phone Number
  - Work Start Date, Email
- Two-column layout for better space utilization

### Edit User Modal (EditUser.jsx)
- Pre-populated form for editing existing users
- Same interface as Create modal but with "Update" button
- Loads existing user data for modification

### Send Email Modal (SendEmail.jsx)
- Send emails to selected users
- Shows selected users as removable tags
- Title input field
- Rich text editor for message content using QuillEditor
- Visual feedback for selected recipients

### Styling (UsersTable.css)
- Privilege badges with color coding:
  - Staff: Blue theme
  - SysAdmin: Purple theme
  - User: Green theme
- Email verification status indicators
- User selection checkboxes
- Two-column form layout
- Responsive design

## Sample Data
The system includes sample data with Arabic and English names, various user types, privileges, and email verification statuses.

## Usage

The Users system is now available at:
```
/dashboard-system-admin/users
```

## File Structure
```
src/pages/SystemAdmin/Users/
├── UsersTable.jsx              # Main table component
├── UsersTable.css              # Styling
├── CreateUser/
│   └── CreateUser.jsx          # Create user modal
├── EditUser/
│   └── EditUser.jsx            # Edit user modal
├── SendEmail/
│   └── SendEmail.jsx           # Send email modal
└── index.js                    # Export file
```

## Key Features
- **Bulk Email**: Select multiple users and send emails
- **Arabic/English Support**: Handles both Arabic and English names
- **Rich Data**: Includes personal, professional, and contact information
- **Verification Status**: Shows email verification with visual indicators
- **Privilege Management**: Color-coded privilege badges
- **Responsive Forms**: Two-column layout that adapts to screen size

## Integration
- Added to App.js routing
- Uses existing components: Button, InputField, Dropdown, DatePicker, Modal, AlertMessage, Pagination, QuillEditor
- Follows the same patterns as other SystemAdmin modules for consistency
