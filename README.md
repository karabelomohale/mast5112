# mast5112
final POE part 3
1. Project Overview
This Application enables the user to add, edit, remove, and filter menu items by course category, as well as handle basic checkout functionality.
The app was built using React Native, with TypeScript for type safety and improved code organization. The design goal was to create an intuitive, visually engaging interface.
2. Objectives
The main objectives of this project were:
•	To build an easy-to-use menu management system for restaurant staff.
•	To allow users to filter menu items based on course categories.
•	To provide basic checkout functionality for customers.
•	To implement a visually appealing, responsive design that enhances user experience.
3. Project Scope
The scope of the project included the following key features:
•	Home Screen: Welcome screen with navigation options to other screens.
•	Manage Menu Screen: Allows users to add, view, and delete menu items.
•	Filter Menu Screen: Provides filtering functionality based on menu item categories.
•	Checkout Screen: Handles checkout functionality, allowing users to review their orders.
Each screen and feature was designed with simplicity and usability in mind, aiming to keep interactions intuitive and direct.
4. Development Process
4.1 Initial Planning and Design
The project began with defining the user flow and designing a simple wireframe to outline the layout of each screen:
•	Home Screen: Provided navigation to all key features of the application.
•	Manage Menu Screen: Listed all available dishes and provided options to add or remove them.
•	Filter Menu Screen: Allowed users to filter dishes by course category.
•	Checkout Screen: Aimed to provide a simple checkout experience.
4.2 Technology Stack
The following technologies were chosen:
•	React Native: for cross-platform development on iOS and Android.
•	Expo: to streamline development, testing, and deployment.
Additional libraries, like react-navigation for navigation and Font Awesome for icons, were used to enhance the app’s functionality and visual appeal.
4.3 Feature Implementation
Manage Menu Screen
The Manage Menu Screen was implemented first, focusing on functionality to add and remove dishes. Users could input the dish name, description, course type, and price. Each new dish was stored in an array and displayed in a list format, allowing users to manage the menu effectively.
Filter Menu Screen
This screen allowed users to filter dishes by course (e.g., starter, main, dessert). It was implemented using JavaScript’s filter method on the array of dishes. This feature encountered an error in accessing the course property, resolved by ensuring correct data binding and type compatibility.
Checkout Screen
The Checkout Screen was developed with basic checkout functionality. This screen lets users view their selected items, calculate the total, and prepare for order submission.
Styling and Design Choices
After implementing core functionality, attention was given to styling each screen for a professional appearance. A dark theme was chosen with vibrant colors (e.g., gold and tomato red) to create a visually appealing, restaurant-themed app.
5. Challenges and Solutions
Throughout the development process, several challenges were encountered:
•	State Management: Managing the state of dishes across screens (especially between the Manage Menu and Filter Menu screens) required careful handling to avoid data inconsistency.
•	User Interface Design: Balancing aesthetics with usability was challenging, as we needed the interface to be engaging without compromising simplicity.
Solutions involved restructuring components, refining the state management approach, and testing thoroughly to ensure robust functionality.
6. Outcome and Conclusion
The Application successfully met the objectives:
•	Users can manage and filter menu items easily.
•	The app is visually appealing and responsive, providing a consistent user experience
•	Error handling and validations ensure smooth user interaction, reducing the chance of incorrect input.
The project helped solidify skills in React Native, TypeScript, and mobile UI design, while also providing valuable lessons in troubleshooting and debugging common mobile development issues.

