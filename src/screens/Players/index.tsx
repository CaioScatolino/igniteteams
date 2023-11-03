import { Header } from "@components/Header";
import { Container } from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";


export function Players () {
    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Nome da turma" subtitle="adicione a galerae e separe os times" />

           <ButtonIcon />

        </Container>
    )
}