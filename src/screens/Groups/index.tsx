import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Button } from '@components/Button';
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {

    const [groups, setGroups] = useState<string[]>([]);

    return (
        <Container>

            <Header />
            <Highlight title='Turmas' subtitle='Jogue com a sua turma!' />

            <FlatList 
                keyExtractor={item => item}
                data={groups}
                renderItem={ ({ item }) => (
                
                    <GroupCard title = {item} />
                    
                    ) }
                contentContainerStyle= {groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => (
                    <ListEmpty message='Que tal cadastrar a primeira turma?' />
                    )}


            />

            <Button 
            title='Criar nova turma'
             />

        </Container>
    );
}
