import React from 'react';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
import SocialIcons from './SocialIcons';

export default function Foooter() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem et suscipit voluptate ea natus al
                        </li>
                        <li>+-543-123-4567</li>
                        <li>example@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Carrer</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
}
