"""empty message

Revision ID: 07d9586c45ee
Revises: d81b762e2e47
Create Date: 2023-04-19 01:02:08.167415

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07d9586c45ee'
down_revision = 'd81b762e2e47'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=32),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.String(length=32),
               type_=sa.INTEGER(),
               existing_nullable=False)

    # ### end Alembic commands ###