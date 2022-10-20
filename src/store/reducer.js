import React from 'react';
import {initialState} from "./store";

export default function reducer(state, action) {
  switch (action.type) {
    case 'User':
      return {...state, user: action.payload};
    case 'ChangeMode':
      return {...state, mode: action.payload};
    case 'DarkMode':
      return {...state, darkMode: !state.darkMode};
    case 'CreateFeed':
      return {...state, feedContent: {...state.feedContent, content: action.payload}};
    case 'AddImage':
      return {
        ...state, feedContent: {
          ...state.feedContent,
          image: [
            ...state.feedContent.image,
            {
              file: action.payload.file,
              originalName: action.payload.originalName,
              description: ' '
            }
          ]
        }
      };
    case 'AddDescription':
      return {};
    case 'ResetFeedContent':
      return {...state, feedContent: initialState.feedContent}
    case 'OpenImageView':
      return {...state, imageView: {open: true, source: action.payload}}
    case 'CloseImageView':
      return {...state, imageView: {open: false, source: ''}}
    case 'OpenSnackbar':
      return {...state, snackbar: {open: true, message: action.payload}}
    case 'CloseSnackbar':
      return {...state, snackbar: {open: false, message: ''}}
    default:
      return state;
  }
};