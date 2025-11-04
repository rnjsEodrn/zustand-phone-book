import { useEffect, useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import { Box, Button, TextField } from '@mui/material';

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  const [searchName, setSearchName] = useState('');
  const [showPhoneBook, setShowPhoneBook] = useState([]);

  const search = () => {
    if (searchName === undefined || !searchName.trim()) {
      setShowPhoneBook([...phoneBook]);
      return;
    }

    setShowPhoneBook(phoneBook.filter((item) => {
      return item.name.match(`\w*${searchName}\w*`);
    }));
  };

  useEffect(()=>{
    search();
  }, [phoneBook])

  return (
    <div>
      <Box marginBottom={'10px'}>
        <TextField
          id="search"
          label="검색"
          size="small"
          variant="outlined"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Button variant="contained" onClick={search}>
          검색
        </Button>
      </Box>
      <Box
        border={'1px solid lightgray'}
        borderRadius={'5px'}
        padding={'5px'}
        display={'flex'}
        justifyContent={'center'}
      >
        <div>
          {showPhoneBook.map((item) => (
            <div key={item.id}>
              {item.name} : {item.phoneNumber}
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default ContactList;
