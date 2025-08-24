# UI Components Library - synapBiz

Cette bibliothèque de composants UI réutilisables est conçue pour maintenir la cohérence visuelle et améliorer la maintenabilité du code dans l'application synapBiz.

## 🚀 Installation

Les composants utilisent `class-variance-authority` pour la gestion des variantes. Assurez-vous qu'il est installé :

```bash
pnpm add class-variance-authority
```

## 📦 Composants Disponibles

### 1. Button
Bouton réutilisable avec différentes variantes, tailles et états.

```tsx
import { Button } from '../components/ui';

// Variantes
<Button variant="primary">Bouton Principal</Button>
<Button variant="secondary">Bouton Secondaire</Button>
<Button variant="ghost">Bouton Transparent</Button>
<Button variant="danger">Bouton Danger</Button>
<Button variant="success">Bouton Succès</Button>
<Button variant="warning">Bouton Avertissement</Button>
<Button variant="outline">Bouton Contour</Button>

// Tailles
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>
<Button size="xl">Très Grand</Button>

// États
<Button loading>Chargement...</Button>
<Button disabled>Désactivé</Button>
<Button leftIcon={<Icon />}>Avec Icône Gauche</Button>
<Button rightIcon={<Icon />}>Avec Icône Droite</Button>
<Button fullWidth>Pleine Largeur</Button>
```

### 2. Card
Carte réutilisable avec en-tête, contenu et pied de page.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui';

<Card variant="elevated" hover="lift">
  <CardHeader>
    <h2>Titre de la Carte</h2>
  </CardHeader>
  <CardContent>
    <p>Contenu de la carte</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Variantes
<Card variant="default" />      // Bordure simple
<Card variant="elevated" />     // Avec ombre et élévation
<Card variant="bordered" />     // Bordure épaisse
<Card variant="transparent" />  // Fond transparent
<Card variant="gradient" />     // Fond dégradé

// Effets de survol
<Card hover="scale" />          // Mise à l'échelle
<Card hover="lift" />           // Élévation
<Card hover="glow" />           // Lueur
```

### 3. Input
Champ de saisie avec validation et icônes.

```tsx
import { Input } from '../components/ui';

<Input 
  label="Email"
  placeholder="votre@email.com"
  helperText="Nous ne partagerons jamais votre email"
  leftIcon={<MailIcon />}
  rightIcon={<CheckIcon />}
  error="Email invalide"
  size="lg"
  fullWidth={false}
/>
```

### 4. Badge
Badge pour afficher des étiquettes et statuts.

```tsx
import { Badge } from '../components/ui';

<Badge variant="success">Actif</Badge>
<Badge variant="warning" size="lg">En attente</Badge>
<Badge icon={<CheckIcon />}>Validé</Badge>
<Badge icon={<StarIcon />} iconPosition="right">Premium</Badge>
```

### 5. Modal
Fenêtre modale réutilisable.

```tsx
import { Modal } from '../components/ui';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  size="lg"
  closeOnBackdrop={true}
  closeOnEscape={true}
>
  <p>Contenu de la modal</p>
  <Button onClick={() => setIsOpen(false)}>Fermer</Button>
</Modal>
```

### 6. Toggle
Interrupteur pour les paramètres et options.

```tsx
import { Toggle } from '../components/ui';

<Toggle 
  label="Notifications"
  description="Recevoir des notifications par email"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
  leftIcon={<BellIcon />}
  labelPosition="right"
/>
```

### 7. Progress
Barre de progression avec différentes variantes.

```tsx
import { Progress } from '../components/ui';

<Progress 
  value={75} 
  max={100}
  variant="primary"
  size="lg"
  showPercentage
  showLabel
  labelPosition="top"
>
  <span>Progression du téléchargement</span>
</Progress>
```

## 🎨 Personnalisation

### Thème Sombre
Tous les composants sont optimisés pour le thème sombre de synapBiz avec :
- Couleurs de fond : `bg-gray-800`, `bg-gray-900`
- Bordures : `border-gray-700`
- Texte : `text-white`, `text-gray-300`, `text-gray-400`

### Variantes CSS
Les composants utilisent `class-variance-authority` pour une gestion flexible des variantes :
- **Variants** : Différents styles visuels
- **Sizes** : Tailles prédéfinies
- **States** : États comme disabled, loading, etc.

## 🔧 Utilisation Avancée

### Composition de Composants
```tsx
<Card variant="elevated" hover="lift">
  <CardHeader>
    <div className="flex items-center justify-between">
      <h3>Titre</h3>
      <Badge variant="success">Nouveau</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <Input 
      label="Recherche"
      leftIcon={<SearchIcon />}
      placeholder="Rechercher..."
    />
  </CardContent>
  <CardFooter>
    <div className="flex space-x-2">
      <Button variant="secondary">Annuler</Button>
      <Button>Confirmer</Button>
    </div>
  </CardFooter>
</Card>
```

### Gestion des États
```tsx
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

<Input 
  error={error}
  helperText="Entrez votre nom complet"
/>
<Button 
  loading={isLoading}
  disabled={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? 'Envoi...' : 'Envoyer'}
</Button>
```

## 📱 Responsive Design

Tous les composants sont conçus pour être responsifs :
- Utilisation de classes Tailwind responsives
- Adaptation automatique aux différentes tailles d'écran
- Support mobile-first

## ♿ Accessibilité

Les composants respectent les standards d'accessibilité :
- Support des attributs ARIA
- Navigation au clavier
- Contraste approprié
- Labels et descriptions appropriés

## 🚀 Migration

Pour migrer des composants existants vers cette bibliothèque :

1. **Remplacer les boutons** : Utiliser `<Button>` au lieu de `<button>`
2. **Remplacer les cartes** : Utiliser `<Card>` avec ses sous-composants
3. **Remplacer les inputs** : Utiliser `<Input>` avec validation intégrée
4. **Ajouter des badges** : Utiliser `<Badge>` pour les statuts

## 📝 Exemples Complets

Consultez le composant `Showcase.tsx` pour voir tous les composants en action avec leurs différentes variantes et configurations.

## 🤝 Contribution

Pour ajouter de nouveaux composants ou modifier les existants :
1. Créer le composant dans le dossier `ui/`
2. Ajouter les types TypeScript appropriés
3. Mettre à jour le fichier `index.ts`
4. Ajouter des exemples dans `Showcase.tsx`
5. Mettre à jour cette documentation

