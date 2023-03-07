import React, { useState } from 'react';

const DirectoryManager = () => {
  const [directory, setDirectory] = useState<string | undefined>();

  const buttonOnClick = async () => {
    const directory = await window.electron.openDirectory();
    setDirectory(directory);
  };

  return (
    <div>
      <button onClick={buttonOnClick}>CLICK ME</button>
      {directory && <p>Save location: {directory}</p>}
    </div>
  );
};

export default DirectoryManager;
