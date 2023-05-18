"""empty message

Revision ID: 0e660dca1dd8
Revises: 210fa651576d
Create Date: 2023-04-19 09:49:46.718873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0e660dca1dd8'
down_revision = '210fa651576d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('problem', schema=None) as batch_op:
        batch_op.add_column(sa.Column('data_structures', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('difficulty', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('problem', schema=None) as batch_op:
        batch_op.drop_column('difficulty')
        batch_op.drop_column('data_structures')

    # ### end Alembic commands ###