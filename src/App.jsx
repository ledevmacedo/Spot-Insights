import React from 'react';
import { EmojiHappy } from 'iconsax-react';
import history from './data/history.json'
import fakehistory from './data/fakehistory.json'
import { List } from './components/list';

export default function App() {
  return (
    <>

      <div className='h-dvh w-full bg-purple-dark'>
        {fakehistory.map((props, index) => (
          <List key={index} {...props} />
        ))}
      </div>
    </>
  )
}



