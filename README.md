
## Guidelines

Coding:

- Follow a Style Guide like SOLID, DRY Principles
- Consistent Naming Conventions (avoid spelling mistakes)
- Modularize Code, avoid duplicate code
- Error Handling should be implemented for every possible scenarios
- Document your code using inline comments

Comments:

- Useful Comments Only - to explain complex logic
- Comments Formatting - write clear and short comments
- Comments Headers - write useful/required information at top of the file
- Update Comments based on development changes
- Avoid Redundant Comments - provide comments only when required, do not over comment

Branching 

- Use descriptive branch names for your tasks eg. registration-ui, order-api-integration
- Keep your code separate from all other branches as much as possible
- Merging branches of other functionality that is not part of your features/task should only be done using Pull Request

Commit Messages:

- Follow Best Conventions
- should be clear and descriptive
- include all relevant information useful for code reviews
- Atomic commits - make small commits focussing on single tasks or feature. Break down larger features into smaller chunks of commits
- Use descriptive issue names while creating branches, should not be too longer

## Code Structure

Main Folders

- `public` - for static assets like images
- `src/components`- for reusable UI Components
- `src/pages` - for all Single Pages
- `src/layout` - for screen layouts
- `src/lib` - for reusable utility functions

Use Atomic Design for components creation and usage

- Atoms - Basic HTML, CSS or JSX Code
- Molecules - `components/ui` - Simplest Reusable Component
- Organisms - `components/elements` - Contains repeating frontend elements,
- Templates - `components/templates` - Larger, more complex components
- Pages - `src/pages` - Not reusable, these are customized responsive content that is accessed by a URL route
