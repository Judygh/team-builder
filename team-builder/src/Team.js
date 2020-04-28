import React from 'react';
import styled from "styled-components";

const H2 = styled.h2`
  
    color: white;
    text-align:center;
`;

const P = styled.p`
    color:#C4C4C4;
    text-align:center;
`;

const TeamCard = styled.div`
    display:flex;
    flex-wrap: wrap;

`;

const TheTeam = styled.div`
    background:#373737;
    width: 100%;
    max-width: 250px;
    padding: 10px;
    margin: 16px auto;
    text-align: left;
`;

const Button = styled.button`
    background-color:white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    
`;

const Team = (props) =>{
    return (
        <TeamCard>

            {props.teamList.map(people => (
                <TheTeam key={people.id}>
                    <H2>Name: {people.name}</H2>
                    <P>Email: {people.email}</P>
                    <P>Role: {people.role}</P>
                    <Button>Edit</Button>
                </TheTeam>
            ))}

        </TeamCard>
    )
}

export default Team;