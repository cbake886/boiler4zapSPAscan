import { withStyles } from '@material-ui/core/styles';

const SucChip = withStyles({
  root: {
    backgroundColor:'SeaGreen'
  }
})(Chip);

const PenChip = withStyles({
  root: {
    backgroundColor:'GoldenRod'
  }
})(Chip);

const DenChip = withStyles({
  root: {
    backgroundColor:'FireBrick'
  }
})(Chip);

const DisChip = withStyles({
  root: {
    backgroundColor:'DimGray'
  }
})(Chip);
