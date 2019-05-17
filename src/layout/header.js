// import './style/layout/header';
import '../style/layout/header.scss';

import { Dropdown, FormControl, InputGroup } from 'react-bootstrap';

import React from 'react';

const componentClassName = 'header';
const arrayType = '[object Array]'
const isAnArray = filter => toString.call(filter[Object.keys(filter).find(e => toString.call(filter[e]) === '[object Array]')]) === arrayType;

const Header = ({ handleSearchOnChange, handleSelectCategory, categories, dynamicFilter, dropdownOnChange }) => (
    <div className={`${componentClassName}`}>
        <div className={`${componentClassName}__filters`}>
            <div className={`${componentClassName}__simple`}>
                <span>Filter:</span>
                <div className={`${componentClassName}__header-category`}>Category</div>
                <div className={`${componentClassName}__categories`}>
                    {categories !== undefined && (
                        <div className={`${componentClassName}__categories_items`}>
                            {categories.map(category => (
                                <div className={`${componentClassName}__category`} key={category.id} onClick={handleSelectCategory(category.id)}>
                                    <img src={category.icons[0].url} />
                                    <p className={`${componentClassName}__name`}>{category.name}</p>
                                </div>
                            ))}
                        </div>
                    )}  
                </div>
                {dynamicFilter !== undefined && (
                    <div className={`${componentClassName}__dynamic`}>
                        {dynamicFilter.map(filter => (
                            <div className={`${componentClassName}__item`} key={filter.id}>
                                {isAnArray(filter) ? (
                                    <Dropdown key={filter.id} onSelect={dropdownOnChange(filter.id)}>
                                        <Dropdown.Toggle variant="success" id={filter.id}>
                                            {filter.name}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {filter.values.map(item => (
                                                <Dropdown.Item eventKey={item.value} key={item.value}>{item.name}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <div>
                                        <InputGroup>
                                            <FormControl placeholder={filter.name} onChange={dropdownOnChange(filter.id)} type={filter.id === 'timestamp' ? 'date' : 'number'}/>
                                        </InputGroup>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    )}
            </div>
            <div className={`${componentClassName}__search`}>
                <p className={`${componentClassName}__search-title`}>Search</p>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Search" onChange={handleSearchOnChange} aria-label="search" aria-describedby="basic-addon1"/>
                </InputGroup>
            </div>
        </div>
    </div>
);

export default Header;