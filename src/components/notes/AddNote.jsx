import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "../../utils/utils";
import { Button, Input, FormGroup, FormLabel } from "@mui/material";
import { addNote } from "./NotesActions";

const AddNote = (props) => {
	const [content, setcontent] = useState("");

	const onChange = (e) => {
		setcontent(e.target.value);
	};

	const onAddClick = () => {
		const note = {
			content: content,
		};
		props.addNote(note);
	};

	return (
		<div>
			<h2>Add new note</h2>

			<FormGroup>
				<FormLabel>Note</FormLabel>
				<Input
					type="textarea"
					aria-rowspan={3}
					name="content"
					placeholder="Enter note"
					value={content}
					onChange={onChange}
				/>
			</FormGroup>

			<Button color="success" onClick={onAddClick}>
				Add note
			</Button>
		</div>
	);
};

AddNote.propTypes = {
	addNote: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addNote })(withRouter(AddNote));
