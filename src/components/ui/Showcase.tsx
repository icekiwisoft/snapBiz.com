import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Input,
  Badge,
  Modal,
  Toggle,
  Progress
} from './index';
import { 
  MagnifyingGlassIcon, 
  CheckIcon, 
  XMarkIcon,
  HeartIcon,
  StarIcon
} from '../IconComponents';

const Showcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">UI Components Showcase</h1>
          <p className="text-gray-400 text-lg">Tous les composants réutilisables de synapBiz</p>
        </div>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Buttons</h2>
            <p className="text-gray-400">Différentes variantes et tailles de boutons</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Variants</h3>
                <div className="space-y-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Sizes</h3>
                <div className="space-y-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">States</h3>
                <div className="space-y-3">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button leftIcon={<HeartIcon className="w-4 h-4" />}>With Icon</Button>
                  <Button rightIcon={<StarIcon className="w-4 h-4" />}>Icon Right</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Cards</h2>
            <p className="text-gray-400">Différentes variantes de cartes</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="default" hover="scale">
                <CardHeader>
                  <h3 className="text-lg font-medium text-white">Default Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Contenu de la carte par défaut</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
              
              <Card variant="elevated" hover="lift">
                <CardHeader>
                  <h3 className="text-lg font-medium text-white">Elevated Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Carte avec élévation et ombre</p>
                </CardContent>
              </Card>
              
              <Card variant="gradient" hover="glow">
                <CardHeader>
                  <h3 className="text-lg font-medium text-white">Gradient Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Carte avec dégradé et effet de lueur</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Inputs Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Inputs</h2>
            <p className="text-gray-400">Différentes variantes d'entrées</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input 
                  label="Input avec label" 
                  placeholder="Placeholder..."
                  helperText="Texte d'aide optionnel"
                />
                <Input 
                  label="Input avec icône" 
                  placeholder="Rechercher..."
                  leftIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
                />
                <Input 
                  label="Input avec erreur" 
                  placeholder="Entrée invalide"
                  error="Ce champ est requis"
                />
              </div>
              
              <div className="space-y-4">
                <Input 
                  label="Input avec validation" 
                  placeholder="Email valide"
                  size="lg"
                />
                <Input 
                  label="Input désactivé" 
                  placeholder="Non disponible"
                  disabled
                />
                <Input 
                  label="Input avec icône droite" 
                  placeholder="Valeur..."
                  rightIcon={<CheckIcon className="w-5 h-5" />}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Badges</h2>
            <p className="text-gray-400">Différentes variantes de badges</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="gradient">Gradient</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">With Icons</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge icon={<CheckIcon className="w-3 h-3" />}>With Icon</Badge>
                  <Badge icon={<StarIcon className="w-3 h-3" />} iconPosition="right">Icon Right</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Toggle</h2>
            <p className="text-gray-400">Interrupteurs et bascules</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Toggle 
                  label="Toggle simple"
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
                <Toggle 
                  label="Toggle avec description"
                  description="Description détaillée du toggle"
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
                <Toggle 
                  label="Toggle avec icône"
                  leftIcon={<HeartIcon className="w-4 h-4" />}
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
              </div>
              
              <div className="space-y-4">
                <Toggle 
                  label="Toggle désactivé"
                  disabled
                />
                <Toggle 
                  label="Toggle en haut"
                  labelPosition="top"
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
                <Toggle 
                  label="Toggle à gauche"
                  labelPosition="left"
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Progress</h2>
            <p className="text-gray-400">Barres de progression</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Sizes</h3>
                <div className="space-y-4">
                  <Progress value={25} size="sm" showPercentage />
                  <Progress value={50} size="md" showPercentage />
                  <Progress value={75} size="lg" showPercentage />
                  <Progress value={90} size="xl" showPercentage />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Variants</h3>
                <div className="space-y-4">
                  <Progress value={30} variant="default" showPercentage />
                  <Progress value={45} variant="primary" showPercentage />
                  <Progress value={60} variant="success" showPercentage />
                  <Progress value={80} variant="warning" showPercentage />
                  <Progress value={95} variant="danger" showPercentage />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">With Labels</h3>
                <div className="space-y-4">
                  <Progress value={65} showLabel showPercentage>
                    <span className="text-white font-medium">Progression</span>
                  </Progress>
                  <Progress value={40} showLabel labelPosition="bottom" showPercentage>
                    <span className="text-white font-medium">Téléchargement</span>
                  </Progress>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-white">Modal</h2>
            <p className="text-gray-400">Fenêtres modales</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={() => setIsModalOpen(true)}>
                Ouvrir la Modal
              </Button>
              
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Exemple de Modal"
                size="lg"
              >
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Ceci est un exemple de modal réutilisable. Vous pouvez personnaliser le contenu,
                    la taille et le comportement selon vos besoins.
                  </p>
                  <div className="flex justify-end space-x-3">
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                      Annuler
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)}>
                      Confirmer
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Showcase;
