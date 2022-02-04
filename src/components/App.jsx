import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ImageApi } from '../services/image-api';
import axios from 'axios';

import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import '../services/image-api';
import Button from './Button';

import Notification from './Notification';

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '16085264-71307d3f0a6fd2ec26a379ecb';

const App = () => {
    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const fetchImg = async page => {
        const response = await axios.get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=$12&key=${apiKey}&page=${page}`,
        );

        const {
            data: { hits },
        } = response;

        return hits;
    };

    const { isLoading, error, data, refetch } = useQuery(
        ['hits', page],

        () => fetchImg(page),
        {
            // enabled: false,
            keepPreviousData: true,
        },
    );

    useEffect(() => {
        if (!searchQuery) return;

        refetch();
    }, [refetch, searchQuery]);

    const onChangeQuery = query => {
        setSearchQuery(query.trim());
        setPage(1);
    };

    const openModal = largeImageURL => {
        setShowModal(true);
        setModalImage(largeImageURL);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImage('');
    };

    const shouldRenderLoadMoreButton = !isLoading;

    return (
        <>
            {error && (
                <Notification
                    text={`Ooops... something went wrong: ${error}`}
                />
            )}

            <Searchbar onSubmit={onChangeQuery} />

            <Container>
                <ImageGallery images={data} onImgClick={openModal} />
                {shouldRenderLoadMoreButton && (
                    <>
                        <Button
                            text={'Prev'}
                            onClick={() => setPage(old => Math.max(old - 1, 0))}
                            disabled={page === 0}
                        />
                        <span>Page: {page + 1}</span>
                        <Button
                            text={'Next'}
                            onClick={() => setPage(old => old + 1)}
                        />
                    </>
                )}
                {/* {isLoading && <Spinner />} */}
                {showModal && (
                    <Modal onClose={closeModal}>
                        <img src={modalImage} alt="" />
                    </Modal>
                )}
            </Container>
            {/* <ReactQueryDevtools /> */}
        </>
    );
};

export default App;
