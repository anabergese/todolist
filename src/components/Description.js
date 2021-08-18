import React from 'react';

const Description = () => {
  return(
    <div className="description">
      <h2>This feature is for users on the Autism spectrum disorder (ASD)</h2>
      <ul>
        <li><strong>To bouild this feature I follow interational recomendations:</strong></li>
        <li>Google Material guidelines, components, and tools that support the best practices of user interface design: https://material.io/</li>
        <li>Web Content Accessibility Guidelines: https://www.w3.org/TR/WCAG20/</li>
      </ul>
      <ul>
        <li><strong>Some considerations applied:</strong></li>
        <li>Use contrast between font and background.</li>
        <li>Make sure text box is clearly separated from the rest.</li>
        <li>Use clear, sans-serif fonts.</li>
        <li>Use clear, large buttons with both icons and text.</li>
        <li>Allow personalization of colors.</li>
      </ul>
      <p><a href="https://icons8.com/icon/61195/todo-list" target="_blank" rel="noreferrer">Todo List icon by Icons8</a></p>
    </div>
  );
};

export default Description;
