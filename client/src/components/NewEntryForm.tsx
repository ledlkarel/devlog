import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function NewEntryForm() {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={open}>+ New Entry</Button>

            <Dialog transition open={isOpen} as="div" className="entry-dialog" onClose={close}>
                <div className="entry-dialog__backdrop">
                    <div className="entry-dialog__center">
                        <DialogPanel className="entry-dialog__panel">
                            <div className="entry-dialog__heading">
                                <DialogTitle as="h2" className="entry-dialog__title">
                                    New Entry
                                </DialogTitle>
                                <button type="button" className="entry-dialog__close" onClick={close} aria-label="Close new entry form">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <Description className="entry-dialog__text">
                                Log your work. Keep the momentum going.
                            </Description>
                            <form className="entry-form" onSubmit={(event) => event.preventDefault()}>
                                <label className="entry-form__field" htmlFor="entry-title">
                                    What you worked on
                                    <input id="entry-title" name="title" type="text" placeholder="e.g. Built the dashboard" required data-autofocus />
                                </label>
                                <div className="entry-form__row">
                                    <label className="entry-form__field" htmlFor="entry-time">
                                        Minutes coded
                                        <input id="entry-time" name="time" type="number" min="1" step="1" placeholder="60" required />
                                    </label>
                                    <label className="entry-form__field" htmlFor="entry-date">
                                        Date
                                        <input id="entry-date" name="date" type="date" required />
                                    </label>
                                </div>
                                <fieldset className="entry-form__tags">
                                    <legend>Tags <span className="entry-form__optional">/ optional</span></legend>
                                    <div className="entry-form__tag-list">
                                        <label className="entry-form__tag">
                                            <input type="checkbox" name="tags" value="frontend" />
                                            <span>Front End</span>
                                        </label>
                                        <label className="entry-form__tag">
                                            <input type="checkbox" name="tags" value="backend" />
                                            <span>Back End</span>
                                        </label>
                                        <label className="entry-form__tag">
                                            <input type="checkbox" name="tags" value="ai" />
                                            <span>AI</span>
                                        </label>
                                    </div>
                                </fieldset>
                                <div className="entry-dialog__actions">
                                    <button type="button" className="entry-dialog__button" onClick={close}>Cancel</button>
                                    <button type="submit" className="entry-dialog__button entry-dialog__button--primary">Create entry <span aria-hidden="true">↵</span></button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
