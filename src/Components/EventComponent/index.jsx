import React, { useState, useEffect } from "react";
import { Table, Menu, Button, Grid, Input, Header, Icon, Modal } from 'semantic-ui-react';
import EventForm from "../EventForm";
import { getEvents, updateEvents } from "./service";
import styles from './styles.css';

const eventsStub = [{ name: "first event", start_time: new Date().toISOString(), end_time: new Date("2021-12-18T16:00:00Z").toISOString() , id: "3443653mongoid"}];

export default function EventComponent({ currentMonth }) {

    const [events, setEvents] = useState(eventsStub);
    const [open, setOpen] = useState(-1)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        const resp = await getEvents(currentMonth);
        setEvents(resp.data);
    }

    const getSchedule = ({ start_time }) => {
        return new Date(start_time)?.toLocaleString();
    };

    const getDuration = ({ start_time, end_time }) => {
        const milisecDiff = new Date(end_time) - new Date(start_time);
        const days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));
        const dateDiff = new Date(milisecDiff);
        return days + " Days " + dateDiff.getHours() + " Hours " + dateDiff.getMinutes() + " Minutes ";
    }

    const handleEdit = index => { setOpen(index); setShowModal(true) };

    const saveEvent = (eventObj) => {
        const eventsClone = Object.assign([], eventsStub);
        if(eventObj.id){
            eventsClone[open] = eventObj;
        }else{
            eventsClone.push(eventObj);
        }
        updateEvents(eventsClone)
    };

    const deleteEvent = (eventObj) =>{
        const eventsClone = Object.assign([], eventsStub);
        eventsClone.splice(open,1);
        updateEvents(eventsClone)
    };

    const updateEvents = (eventsClone)=>{
        setEvents(eventsClone);
        setOpen(-1);
    }

    return (
        <Grid>
            <Grid.Column width={16}>
                <Header icon>
                    Events
                </Header>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Schedule</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>:</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {events.map((event, index) =>
                        (<Table.Row key={event._id}>
                            <Table.Cell>{event.name}</Table.Cell>
                            <Table.Cell>{getSchedule(event)}</Table.Cell>
                            <Table.Cell>{getDuration(event)}</Table.Cell>
                            <Table.Cell><Button onClick={()=>handleEdit(index)}>edit</Button></Table.Cell>
                        </Table.Row>),
                        )}
                    </Table.Body>
                </Table>
            </Grid.Column>
            {/* <Grid.Column width={6}>
                <Input focus placeholder='Search...' onChange={e => setSearchBook(e.target.value)} />
                <Button onClick={findBooks}>Search</Button>
            </Grid.Column> */}
            {showModal &&
                <EventForm eventObj={events[open]} showModal={showModal} setShowModal={setShowModal} deleteEvent={deleteEvent} saveEvent={saveEvent}/>
            }
        </Grid >
    );
}