import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${(props: { theme: any }) => props.theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 10px;
    }

    p {
        text-align: right;
    }

    @media (max-width: ${(props: { theme: any }) => props.theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`;
