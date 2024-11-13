// https://fullstackopen.com/en/part2/rendering_a_collection_modules

const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      //This solution is not recommended and can create undesired problems even if it seems to be working just fine.
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note.content}</li>
        ))}
      </ul>
      {/*  This solution is fine
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      */}
    </div>
  );
};

export default App;
