

function formatDescription(description) {
    return description.split('\n').map((line) => (
        <>
            {line}
            <br />
        </>
    ));
}

export default formatDescription;
