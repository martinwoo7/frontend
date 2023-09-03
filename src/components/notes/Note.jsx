import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "../../utils/utils";
import { deleteNote, updateNote } from "./NotesActions";
import { Button } from "@mui/material";

const Note = (props) => {
	const { note } = props;
	const onDeleteClick = () => {
		props.deleteNote(note.id);
	};
	const onUpperCaseClick = () => {
		props.updateNote(note.id, {
			content: note.content.toUpperCase(),
		});
	};
	const onLowerCaseClick = () => {
		props.updateNote(note.id, {
			content: note.content.toLowerCase(),
		});
	};
	return (
		<div>
			<hr />
			<p>
				(id:{note.id}) {note.content}
			</p>
			<Button color="secondary" size="sm" onClick={onUpperCaseClick}>
				Upper case
			</Button>{" "}
			<Button color="info" size="sm" onClick={onLowerCaseClick}>
				Lower case
			</Button>{" "}
			<Button color="danger" size="sm" onClick={onDeleteClick}>
				Delete
			</Button>
		</div>
	);
};

Note.propTypes = {
	note: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteNote, updateNote })(
	withRouter(Note)
);
