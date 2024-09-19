"use client"
import React from 'react';

const ShareButton = () => {
  const isWebShareSupported = () => {
    return navigator.share !== undefined;
  };

  const shareContent = async () => {
    try {
      await navigator.share({
        title: 'Title of the shared content',
        text: 'Description of the shared content',
        url: 'https://example.com',
      });
      alert('Shared successfully');
    } catch (error) {
      alert('Error sharing:', error);
    }
  };

  const fallbackShare = () => {
    // Implement custom sharing functionality here
    // For example, opening a share dialog or redirecting to a shareable link
    alert('Fallback share');
  };

  const handleShare = () => {
    if (isWebShareSupported()) {
      shareContent();
    } else {
      fallbackShare();
    }
  };

  return (
    <table className="table-auto w-full">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr.</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
  );
};

export default ShareButton;
