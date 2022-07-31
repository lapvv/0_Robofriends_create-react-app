import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput placeholder='Search in posts feed' value={filter.query} onChange={event=>setFilter({...filter, query: event.target.value})} />
            <MySelect value={filter.sort} onChange={selectedSort=>setFilter({...filter, sort: selectedSort})} defaultValue={'Sort by'} options={[
                {name: 'By title', value: 'title'},
                {name: 'By content', value: 'body'},
            ]}/>          
        </div>
    );
};

export default PostFilter;