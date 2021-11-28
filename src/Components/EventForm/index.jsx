import React, { useState, useEffect } from "react";
import { Table, Menu, Button, Grid, Input, Header, Icon, Modal } from 'semantic-ui-react';

export default function EventForm({ eventObj, showModal, setShowModal, saveEvent, deleteEvent }) {
    const [startTime, setStartTime] = useState(eventObj?.start_time?.slice(0, 16) || "");
    const [endTime, setEndTime] = useState(eventObj?.end_time?.slice(0, 16) || "");

    const [eventName, setEventName] = useState(eventObj?.name);

    const handleStartTime = (e) => {
        setStartTime(e.target.value)
    }

    const handleEndTime = (e) => {
        setEndTime(e.target.value)
    }

    const handleEventName = (e) => {
        setEventName(e.target.value)
    }

    const handleSave = (archived) => saveEvent({
        ...eventObj,
        name: eventName,
        start_time: startTime && new Date(startTime).toISOString(),
        end_time: endTime && new Date(endTime)?.toISOString(),
        archived: !!archived
    });

    return (

        <Modal
            basic
            onClose={() => setShowModal(false)}
            open={showModal}
            size='small'
        >
            <Header icon>
                <Icon name='archive' />
                {eventObj ? "Modify" : "Create"} this Event
            </Header>
            <Modal.Content>
                <div className="m-2">
                    <label for="name">Event Name:</label>
                    <Input id="name" className="mx-3" value={eventName} onChange={handleEventName} />
                </div>
                <div className="m-2">
                    <label for="start_time">Start Time:</label>
                    <Input id="start_time" type="datetime-local" onChange={handleStartTime}
                        value={startTime} className="mx-3" />
                </div>
                <div className="m-2">
                    <label for="end_time">End Time:</label>
                    <Input id="end_time" type="datetime-local" onChange={handleEndTime}
                        value={endTime} className="mx-3" />
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setShowModal(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                {eventObj.id && <Button basic color='blue' inverted onClick={()=>handleSave(true)}>
                    <Icon name='remove' /> Delete
                </Button>}
                <Button color='green' inverted onClick={handleSave}>
                    <Icon name='checkmark' /> Save
                </Button>
            </Modal.Actions>
        </Modal>
    );
}