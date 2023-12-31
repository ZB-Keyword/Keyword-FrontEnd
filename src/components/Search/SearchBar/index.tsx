import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/common/Input';
import useInput from '@/hooks/useInput';

interface SearchBarProps {
  backSearch?: boolean;
  keyword: string;
}

const SearchBar = ({ backSearch, keyword }: SearchBarProps) => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword, handleChangeSearchKeyword] = useInput(
    keyword || ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/result?keyword=${searchKeyword}`);
  };

  const handleBack = () => {
    if (backSearch) {
      navigate('/search');
    } else {
      navigate(-1);
    }
  };

  return (
    <form
      className="flex items-center -ml-5 -mt-10 relative"
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        className="relative h-10 w-12 flex justify-center items-center pl-2"
        onClick={handleBack}
      >
        <span className="sr-only">뒤로가기</span>
        <IoIosArrowBack className="text-2xl " />
      </button>
      <button type="button" onClick={handleBack} className="w-full">
        <span className="sr-only">검색창으로 이동</span>
        <Input
          type="text"
          value={searchKeyword}
          focus
          addStyle="pr-5"
          handleChangeInput={handleChangeSearchKeyword}
        />
      </button>
      <button
        type="submit"
        className="h-9 w-12 flex justify-center items-center bg-gray2 absolute right-0 top-1/2 -translate-y-1/2 rounded-r-xl"
      >
        {' '}
        <span className="sr-only">검색하기</span>{' '}
        <IoSearchOutline className="text-2xl " />
      </button>
    </form>
  );
};

export default SearchBar;
