import React, { useState } from 'react';
import { FlatList, View } from 'react-native'
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import ToDoCard from './components/toDoCard/ToDoCard';
import AddToDo from './components/addToDo/AddToDo';

export default function App() {
	const [tasks, setTasks] = useState([])
	const [taskInput, setTaskInput] = useState('')
	const [searchText, setSearchText] = useState('')
	const [filteredTasks, setFilteredTasks] = useState([])

	function handleAddTask() {
		setTasks([...tasks, { id: Date.now().toString(), text: taskInput }])
		setFilteredTasks([...filteredTasks, { id: Date.now().toString(), text: taskInput }])
		setTaskInput('')
	}

	function handleDeleteTask(taskId) {
		const updatedFilteredTasks = filteredTasks.filter((task) => task.id !== taskId);
		setFilteredTasks(updatedFilteredTasks);
	}

	function handleSearch(text) {
		const filtered = tasks.filter((task) =>
			task.text.toLowerCase().includes(text.toLowerCase())
		)
		setFilteredTasks(filtered)
	}

	const renderTaskItem = ({ item }) => (
		<ToDoCard text={item.text} deleteTask={() => handleDeleteTask(item.id)} />
	)

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<SearchBar onSearch={handleSearch} onChangeText={setSearchText} searchText={searchText} />
			<FlatList
				data={filteredTasks}
				renderItem={renderTaskItem}
				keyExtractor={(item) => item.id}
			/>
			<AddToDo value={taskInput} onChangeText={setTaskInput} onPress={handleAddTask} />
		</View>
	)
}