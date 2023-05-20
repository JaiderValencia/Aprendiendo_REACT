import React from 'react';

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
            <tfoot>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default React.memo(Table)