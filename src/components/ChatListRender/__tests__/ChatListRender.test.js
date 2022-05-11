import {fireEvent, render, screen} from "@testing-library/react";
import {ChatListRender} from "../ChatListRender";
import {MemoryRouter} from "react-router-dom";

describe('ChatList', () => {
    it('should render chat', function () {
            render(<ChatListRender chats={[
                {name:'Chat 1', id: 1},
                {name:'Chat 2', id: 2},
                {name:'Chat 3', id: 3},
            ]}/>,{wrapper: MemoryRouter})

            fireEvent.click(screen.getByText('Список чатов'));
            const chat_1 = screen.getByText('Chat 1')
            const chat_2 = screen.getByText('Chat 2')
            const chat_3 = screen.getByText('Chat 3')

            expect(chat_1).toBeDefined()
            expect(chat_2).toBeDefined()
            expect(chat_3).toBeDefined()

    });
})