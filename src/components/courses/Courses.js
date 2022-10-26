import React from 'react';
import Header from '../header/Header';

const Courses = () => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images8.alphacoders.com/113/1136157.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <Header></Header>
            <Container>
                <Row >
                    <Col lg='3' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;