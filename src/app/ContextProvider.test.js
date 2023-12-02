import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContextProvider, { useTitleContext } from './ContextProvider';

describe('ContextProvider', () => {
  it('should set and update the title', () => {
    // Arrange
    const { getByText } = render(
      <ContextProvider>
        <TitleUpdater />
        <TitleDisplay />
      </ContextProvider>
    );

    // Act & Assert (initial render)
    expect(getByText(/Current Title:/).textContent).toBe('Current Title: '); // Title starts as empty string

    // Act (update title)
    const titleInput = getByText('Set Title:');
    userEvent.type(titleInput, 'New Title');
    userEvent.click(getByText('Update Title'));

    // Act & Assert (after update)
    expect(getByText(/Current Title:/).textContent).toBe('Current Title: New Title');
  });
});

function TitleUpdater() {
  const { setTitle } = useTitleContext();

  const handleUpdateTitle = () => {
    setTitle('New Title');
  };

  return (
    <div>
      <label htmlFor="titleInput">Set Title:</label>
      <input id="titleInput" />
      <button onClick={handleUpdateTitle}>Update Title</button>
    </div>
  );
}

function TitleDisplay() {
  const { title } = useTitleContext();

  return (
    <div>
      <p>Current Title: {title}</p>
    </div>
  );
}
