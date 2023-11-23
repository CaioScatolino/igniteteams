import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Filter } from "@components/Filter";

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Caio', 'Diogo']);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          horizontal
          renderItem={({ item }) => (

            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />

          )}
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => { }} name={item} />
        )}
      />

    </Container>
  )
}