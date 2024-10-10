import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Principle {
  id: string;
  content: string;
  description: string;
}

interface Description {
  id: string;
  content: string;
  correctPrincipleId: string;
}

interface PrincipiosBasicosActivityProps {
  principles: Principle[];
  onBackToContent: () => void;
}

const PrincipiosBasicosActivity: React.FC<PrincipiosBasicosActivityProps> = ({ principles, onBackToContent }) => {
  const [score, setScore] = useState(0);
  const [descriptions, setDescriptions] = useState<Description[]>(principles.map((p, index) => ({ 
    id: `desc${index + 1}`, 
    content: p.description, 
    correctPrincipleId: p.id 
  })));

  const [matches, setMatches] = useState<{[key: string]: Description | null}>(
    principles.reduce((acc, principle) => ({ ...acc, [principle.id]: null }), {})
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId) return;

    const draggedDesc = descriptions.find(d => d.id === draggableId);
    if (!draggedDesc) return;

    // Remove from descriptions
    setDescriptions(prev => prev.filter(d => d.id !== draggableId));

    // Add to matches
    setMatches(prev => ({
      ...prev,
      [destination.droppableId]: draggedDesc
    }));

    // Update score
    if (draggedDesc.correctPrincipleId === destination.droppableId) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold mb-4">Actividad: Arrastra y Suelta</h3>
      <p className="mb-4">Arrastra las descripciones a los principios correspondientes:</p>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Principios:</h4>
            {principles.map((principle) => (
              <Droppable key={principle.id} droppableId={principle.id}>
                {(provided, snapshot) => (
                  <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`mb-4 p-3 rounded-lg ${snapshot.isDraggingOver ? 'bg-pink-600' : 'bg-white bg-opacity-20'}`}
                  >
                    <span className="font-medium">{principle.content}</span>
                    {matches[principle.id] && (
                      <div className={`mt-2 p-2 rounded ${matches[principle.id]?.correctPrincipleId === principle.id ? 'bg-green-500' : 'bg-red-500'}`}>
                        {matches[principle.id]?.content}
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
          
          <Droppable droppableId="descriptions">
            {(provided) => (
              <div className="w-full md:w-1/2 pl-4" {...provided.droppableProps} ref={provided.innerRef}>
                <h4 className="font-semibold mb-2">Descripciones:</h4>
                {descriptions.map((desc, index) => (
                  <Draggable key={desc.id} draggableId={desc.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white bg-opacity-20 rounded-lg p-3 mb-2 cursor-move"
                      >
                        {desc.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <motion.p 
        className="mt-4 font-semibold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3, repeat: score > 0 ? 1 : 0 }}
      >
        Puntuación: {score} / {principles.length}
      </motion.p>

      <motion.button
        className="mt-4 bg-white text-pink-700 font-bold py-2 px-4 rounded hover:bg-pink-100 transition duration-300"
        onClick={onBackToContent}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Volver al Contenido
      </motion.button>
    </div>
  );
};

export default PrincipiosBasicosActivity;